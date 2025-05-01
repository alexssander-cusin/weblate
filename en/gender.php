<?php

use App\Enums\GenderEnum;

return [
    GenderEnum::MAN_ID => [
        'name' => 'Man',
        'slug' => 'male',
        'message' => 'Male',
        'plural' => 'Male escorts',
        'detail' => 'Cisgender Man. Born male and identifies as a man.',
    ],

    GenderEnum::WOMAN_ID => [
        'name' => 'Woman',
        'slug' => 'female',
        'message' => 'Female',
        'plural' => 'Female escorts',
        'detail' => 'Cisgender Woman. Born female and identifies as a woman.',
    ],

    GenderEnum::TRANS_ID => [
        'name' => 'Transgender',
        'slug' => 'trans',
        'message' => 'Transgender',
        'plural' => 'Transgender escorts',
        'detail' => 'The sex assigned at birth is not the same as the current gender identity.',
    ],

    GenderEnum::SUBGENDER_MAN_TRANS_ID => [
        'name' => 'Transgender man',
        'slug' => 'trans',
        'message' => 'Transgender man',
        'plural' => 'Transgender men',
        'detail' => 'Born female and identifies as a man.',
    ],

    GenderEnum::SUBGENDER_WOMAN_TRANS_ID => [
        'name' => 'Transgender woman',
        'slug' => 'trans',
        'message' => 'Transgender woman',
        'plural' => 'Transgender women',
        'detail' => 'Born male and identifies as a woman.',
    ],

    GenderEnum::SUBGENDER_NON_BINARY_ID => [
        'name' => 'Non-binary person',
        'slug' => 'non-binary-person',
        'message' => 'Non-binary person',
        'plural' => 'Non-binaries',
        'detail' => 'Does not identify as either a man or a woman.',
    ],
];
