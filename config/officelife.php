<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Name of the company
    |--------------------------------------------------------------------------
    |
    | This defines the name of the site.
    |
    */
    'name' => 'OfficeLife',

    /*
    |--------------------------------------------------------------------------
    | Permission levels
    |--------------------------------------------------------------------------
    |
    | This value defines the different user permission levels.
    |
    */
    'permission_level' => [
        'administrator' => 100,
        'hr' => 200,
        'user' => 300,
    ],

    /*
    |--------------------------------------------------------------------------
    | API key for geolocation service.
    |--------------------------------------------------------------------------
    |
    | We use LocationIQ (https://locationiq.com/) to translate addresses to
    | latitude/longitude coordinates. We could use Google instead but we don't
    | want to give anything to Google, ever.
    | LocationIQ offers 10,000 free requests per day.
    |
    */
    'location_iq_api_key' => env('LOCATION_IQ_API_KEY', null),

    /*
    |--------------------------------------------------------------------------
    | Locationiq API Url
    |--------------------------------------------------------------------------
    |
    | Url to call LocationHQ api. See https://locationiq.com/docs
    |
    */
    'location_iq_url' => env('LOCATION_IQ_URL', 'https://us1.locationiq.com/v1/'),

    /*
    |--------------------------------------------------------------------------
    | Mapbox API key
    |--------------------------------------------------------------------------
    |
    | Used to display static maps. See https://docs.mapbox.com/help/how-mapbox-works/static-maps/
    |
    */
    'mapbox_api_key' => env('MAPBOX_API_KEY', null),

    /*
    |--------------------------------------------------------------------------
    | URL of the documentation center
    |--------------------------------------------------------------------------
    |
    | This platform hosts the help documentation.
    |
    */
    'help_center_url' => 'https://docs.officelife.io/',

    /*
    |--------------------------------------------------------------------------
    | Mapping of the Help sections
    |--------------------------------------------------------------------------
    |
    | These are the links that are used in the UI to point to the right help
    | section.
    |
    */
    'help_links' => [
        'work_from_home' => 'employees#work-from-home',
        'skills' => 'skills',
        'account_hardware_create' => 'hardware',
        'account_employee_delete' => 'employee-management#deleting-an-employee',
        'account_employee_lock' => 'employee-management#locking-an-employee',
        'team_recent_ship' => 'recent-ships',
        'team_recent_ship_create' => 'recent-ships#creating-an-entry',
        'account_general_company_name' => 'company#update-company-name',
        'account_general_currency' => 'currency',
    ],
];
