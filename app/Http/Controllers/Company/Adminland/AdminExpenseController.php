<?php

namespace App\Http\Controllers\Company\Adminland;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Helpers\InstanceHelper;
use App\Models\Company\Employee;
use Illuminate\Http\JsonResponse;
use App\Helpers\NotificationHelper;
use App\Http\Controllers\Controller;
use App\Http\ViewHelpers\Adminland\AdminExpenseViewHelper;
use App\Services\Company\Adminland\Expense\AllowEmployeeToManageExpenses;
use App\Services\Company\Adminland\ExpenseCategory\CreateExpenseCategory;
use App\Services\Company\Adminland\ExpenseCategory\UpdateExpenseCategory;
use App\Services\Company\Adminland\ExpenseCategory\DestroyExpenseCategory;
use App\Services\Company\Adminland\Expense\DisallowEmployeeToManageExpenses;

class AdminExpenseController extends Controller
{
    /**
     * Show the list of expense categories.
     *
     * @return Response
     */
    public function index(): Response
    {
        $company = InstanceHelper::getLoggedCompany();

        $categoriesCollection = AdminExpenseViewHelper::categories($company);
        $employeesCollection = AdminExpenseViewHelper::employees($company);

        return Inertia::render('Adminland/Expense/Index', [
            'notifications' => NotificationHelper::getNotifications(InstanceHelper::getLoggedEmployee()),
            'categories' => $categoriesCollection,
            'employees' => $employeesCollection,
        ]);
    }

    /**
     * Create a new expense category.
     *
     * @param Request $request
     * @param int $companyId
     * @return JsonResponse
     */
    public function store(Request $request, int $companyId): JsonResponse
    {
        $loggedEmployee = InstanceHelper::getLoggedEmployee();
        $loggedCompany = InstanceHelper::getLoggedCompany();

        $request = [
            'company_id' => $loggedCompany->id,
            'author_id' => $loggedEmployee->id,
            'name' => $request->input('name'),
        ];

        $category = (new CreateExpenseCategory)->execute($request);

        return response()->json([
            'data' => [
                'id' => $category->id,
                'name' => $category->name,
            ],
        ], 201);
    }

    /**
     * Update the expense category.
     *
     * @param Request $request
     * @param int $companyId
     * @param mixed $expenseCategoryId
     * @return JsonResponse
     */
    public function update(Request $request, int $companyId, int $expenseCategoryId): JsonResponse
    {
        $loggedEmployee = InstanceHelper::getLoggedEmployee();
        $loggedCompany = InstanceHelper::getLoggedCompany();

        $request = [
            'company_id' => $loggedCompany->id,
            'author_id' => $loggedEmployee->id,
            'expense_category_id' => $expenseCategoryId,
            'name' => $request->input('name'),
        ];

        $category = (new UpdateExpenseCategory)->execute($request);

        return response()->json([
            'data' => [
                'id' => $category->id,
                'name' => $category->name,
            ],
        ], 201);
    }

    /**
     * Delete the expense category.
     *
     * @param Request $request
     * @param int $companyId
     * @param int $expenseCategoryId
     * @return JsonResponse
     */
    public function destroy(Request $request, int $companyId, int $expenseCategoryId): JsonResponse
    {
        $loggedEmployee = InstanceHelper::getLoggedEmployee();

        $request = [
            'company_id' => $companyId,
            'expense_category_id' => $expenseCategoryId,
            'author_id' => $loggedEmployee->id,
        ];

        (new DestroyExpenseCategory)->execute($request);

        return response()->json([
            'data' => true,
        ], 200);
    }

    /**
     * Search an employee to add him as someone with the right to manage
     * expenses in the company.
     *
     * @param Request $request
     * @param int $companyId
     * @return JsonResponse
     */
    public function search(Request $request, int $companyId): JsonResponse
    {
        $potentialEmployees = Employee::search(
            $request->input('searchTerm'),
            $companyId,
            10,
            'created_at desc',
            'and locked = false and can_manage_expenses = false',
        );

        $employees = collect([]);
        foreach ($potentialEmployees as $employee) {
            $employees->push([
                'id' => $employee->id,
                'name' => $employee->name,
                'avatar' => $employee->avatar,
            ]);
        }

        return response()->json([
            'data' => $employees,
        ], 200);
    }

    /**
     * Assign an employee to let him manage expenses company wide.
     *
     * @param Request $request
     * @param int $companyId
     * @return JsonResponse
     */
    public function addEmployee(Request $request, int $companyId): JsonResponse
    {
        $loggedCompany = InstanceHelper::getLoggedCompany();
        $loggedEmployee = InstanceHelper::getLoggedEmployee();

        $request = [
            'company_id' => $companyId,
            'author_id' => $loggedEmployee->id,
            'employee_id' => $request->input('selectedEmployee'),
        ];

        $employee = (new AllowEmployeeToManageExpenses)->execute($request);

        return response()->json([
            'data' => [
                'id' => $employee->id,
                'name' => $employee->name,
                'avatar' => $employee->avatar,
                'url' => route('employees.show', [
                    'company' => $loggedCompany,
                    'employee' => $employee,
                ]),
            ],
        ], 201);
    }

    /**
     * Unassing an employee to let him manage expenses company wide.
     *
     * @param Request $request
     * @param int $companyId
     * @return JsonResponse
     */
    public function removeEmployee(Request $request, int $companyId): JsonResponse
    {
        $loggedEmployee = InstanceHelper::getLoggedEmployee();

        $request = [
            'company_id' => $companyId,
            'author_id' => $loggedEmployee->id,
            'employee_id' => $request->input('selectedEmployee'),
        ];

        $employee = (new DisallowEmployeeToManageExpenses)->execute($request);

        return response()->json([
            'data' => [
                'id' => $employee->id,
            ],
        ], 201);
    }
}