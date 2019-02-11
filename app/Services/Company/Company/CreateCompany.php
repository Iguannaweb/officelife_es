<?php

namespace App\Services\Company\Company;

use App\Models\User\User;
use Illuminate\Support\Str;
use App\Services\BaseService;
use App\Models\Company\Company;
use App\Models\Company\Employee;

class CreateCompany extends BaseService
{
    /**
     * Get the validation rules that apply to the service.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'author_id' => 'required|integer|exists:users,id',
            'name' => 'required|unique:companies,name|string|max:255',
        ];
    }

    /**
     * Create a company.
     *
     * @param array $data
     * @return Company
     */
    public function execute(array $data) : Company
    {
        $this->validate($data);

        $company = Company::create([
            'name' => $data['name'],
        ]);

        $author = User::find($data['author_id']);

        (new LogAction)->execute([
            'company_id' => $company->id,
            'action' => 'account_created',
            'objects' => json_encode([
                'author_id' => $author->id,
                'author_name' => $author->name,
                'company_name' => $company->name,
            ]),
        ]);

        $this->addFirstEmployee($company, $author);

        return $company;
    }

    /**
     * Add the first employee to the company.
     *
     * @param Company $company
     * @param User $author
     * @return void
     */
    private function addFirstEmployee(Company $company, User $author)
    {
        Employee::create([
            'user_id' => $author->id,
            'company_id' => $company->id,
            'uuid' => Str::uuid()->toString(),
            'permission_level' => config('homas.authorizations.administrator'),
            'identities' => json_encode([
                'email' => $author->email,
                'first_name' => $author->first_name,
                'last_name' => $author->last_name,
            ]),
        ]);
    }
}