export const appMessages = {
    spanish: {
        RES_API_WORKING: 'API Funcionando Correctamente',
        RES_API_GET: 'Se ha recibido petición a http://localhost:3000/',
        RES_BUILDING: 'Servicio en construcción...',
        //Validation messages
        INIT_VALIDATION: 'Se ha iniciado la validación de datos',
        ERROR_VALIDATION: 'Error validando la información enviada',
        ERROR_EMAIL_EXISTS: "Se debe enviar un email",
        ERROR_EMAIL_INVALID: "Se debe enviar un email válido",
        ERROR_PASSWORD_EXISTS: "Se debe enviar una contraseña",
        ERROR_PASSWORD_LOW_UPPER_CASE: "La contraseña debe incluir mayúsculas y minúsculas",
        ERROR_PASSWORD_LENGTH: "La contraseña debe tener mínimo 10 caracteres",
        ERROR_PASSWORD_SPECIAL_CHAR: "La contraseña debe incluir los siguientes caracteres especiales:",
        // Mail Subjects
        MAIL_CONFIRM_USER: "Confirma tu usuario!",
        // Response for user request
        USER_INIT_CREATE: 'Inicio de creación de usuario',
        USER_RESPONSE_CREATE: 'Creación de usuario con éxito',
        USER_ERROR_CREATE: 'Error creando un usuario',
        USER_DUPLICATED_EMAIL: 'Ya existe una cuenta registrada con ese correo',
        // Auth Messages
        AUTH_USER_NOT_EXISTS: 'El correo no se encuentra registrado en la plataforma',
        AUTH_INCORRECT_PASSWORD: 'Contraseña incorrecta',
        AUTH_INIT_LOGIN: "Inicio del servicio login",
        AUTH_LOGIN_RESPONSE: "Se inició sesión de manera correcta",
        AUTH_LOGIN_ERROR_RESPONSE: "Error al iniciar sesiión",
        AUTH_TOKEN_MISSING: "Token no enviado",
        AUTH_TOKEN_EXPIRED: "Token ha expirado",
        AUTH_TOKEN_NOT_VALID: "Token es invalido",
        AUTH_TOKEN_ERROR_VALIDATION: "Ha ocurrido un error validando el token",
        //Pokemon Messages
        POKEMONS_INIT_CREATE: "Iniciar crear pokemons",
        POKEMONS_CREATE_SUCCESS: "Se ha creado pokemon con exito",
        POKEMON_NAME_ERROR: "Un Pokemon con ese nombre ya existe",
        POKEMON_POKEDEX_ERROR: "Ese numero de pokedex ya se encuentra registrado",
        POKEMON_CREATE_ERROR: "Error creando el pokemon",
        POKEMON_FIND_ALL_ERROR: "Error encontrando los Pokemons",
        POKEMON_FIND_ALL_INIT: "Inicio de busqueda de Pokemons",
        POKEMON_FIND_ALL_SUCCESS: "Busqueda de Pokemons con exito",
        POKEMON_UPDATE_ERROR: "Error actualizando pokemon",
        POKEMON_UPDATE_INIT: "Inicio de actualización de pokemon",
        POKEMON_UPDATE_SUCCESS: "Actualización de pokemon con exito",
        POKEMON_FIND_ONE_ERROR: "Error buscando pokemon",
        POKEMON_FIND_ONE_INIT: "Inicio de busqueda de pokemon",
        POKEMON_FIND_ONE_SUCCESS: "Busqueda de pokemon con exito",
        POKEMON_DELETE_ERROR: "Error eliminando pokemon",
        POKEMON_DELETE_INIT: "Inicio de borrado de pokemon",
        POKEMON_DELETE_SUCCESS: "Borrado de pokemon con exito",
        POKEMON_UNAUTHORIZED_ACTION: "No esta autorizado a editar ni eliminar este pokemon",
        //Variables Messages
        VAR_NUMBER: "debe ser de tipo number",
        VAR_NUMBER_OR_NULL: "debe ser de tipo number o null",
        VAR_STRING: "debe ser de tipo string",
        VAR_STRING_OR_NULL: "debe ser de tipo string o null",
        VAR_OBJECT: "debe ser de tipo object",
        VAR_ARRAY: "debe ser de tipo array",
        VAR_BOOLEAN: "debe ser de tipo boolean",
        VAR_EXISTS: "debe ser enviado"
    },
    english: {
        RES_API_WORKING: 'API Working Correctly',
        RES_API_GET: 'Request to http://localhost:3000/ received',
        RES_BUILDING: 'Service is not available yet...',
        //Validation messages
        INIT_VALIDATION: 'Validation has started',
        ERROR_VALIDATION: 'Error validating your data',
        ERROR_EMAIL_EXISTS: "Email must be sent",
        ERROR_EMAIL_INVALID: "Email is invalid",
        ERROR_PASSWORD_EXISTS: "Password must be sent",
        ERROR_PASSWORD_LOW_UPPER_CASE: "Password must include lower and upper case",
        ERROR_PASSWORD_LENGTH: "Password length must be 10 character long",
        ERROR_PASSWORD_SPECIAL_CHAR: "Password must contain the follow special characters:",
        // Mail Subjects
        MAIL_CONFIRM_USER: "Confirm your user!",
        // Response for user request
        USER_INIT_CREATE: 'User creation start',
        USER_RESPONSE_CREATE: 'User creation successful',
        USER_ERROR_CREATE: 'Error creating an user',
        USER_DUPLICATED_EMAIL: 'Account with given email already exists',
        // Auth Messages
        AUTH_USER_NOT_EXISTS: 'Email sent does not exists',
        AUTH_INCORRECT_PASSWORD: 'Incorrect password',
        AUTH_INIT_LOGIN: "Login service start",
        AUTH_LOGIN_RESPONSE: "Login successful",
        AUTH_LOGIN_ERROR_RESPONSE: "Error during login",
        AUTH_TOKEN_MISSING: "Token was not provided",
        AUTH_TOKEN_EXPIRED: "Token has expired",
        AUTH_TOKEN_NOT_VALID: "Token is invalid",
        AUTH_TOKEN_ERROR_VALIDATION: "An error has ocurred durin token validation",
        //Pokemons Messages
        POKEMONS_INIT_CREATE: "Create pokemons init",
        POKEMONS_CREATE_SUCCESS: "Pokemon created successfully",
        POKEMON_NAME_ERROR: "A Pokemon with that name already exists",
        POKEMON_POKEDEX_ERROR: "that pokedex number already exists",
        POKEMON_CREATE_ERROR: "Error creating pokemon",
        POKEMON_FIND_ALL_ERROR: "Error finding pokemons",
        POKEMON_FIND_ALL_INIT: "Find all Pokemon init",
        POKEMON_FIND_ALL_SUCCESS: "Find all Pokemon success",
        POKEMON_UPDATE_ERROR: "Error updating pokemon",
        POKEMON_UPDATE_INIT: "Update Pokemon init",
        POKEMON_UPDATE_SUCCESS: "Update Pokemon success",
        POKEMON_FIND_ONE_ERROR: "Error finding pokemon",
        POKEMON_FIND_ONE_INIT: "Find one Pokemon init",
        POKEMON_FIND_ONE_SUCCESS: "Find one Pokemon success",
        POKEMON_DELETE_ERROR: "Error deleting pokemon",
        POKEMON_DELETE_INIT: "Delete Pokemon init",
        POKEMON_DELETE_SUCCESS: "Delete Pokemon success",
        POKEMON_UNAUTHORIZED_ACTION: "You are not authorized to delete or update this pokemon",
        //Variables Messages
        VAR_NUMBER: "should be a number",
        VAR_NUMBER_OR_NULL: "should be a number or null",
        VAR_STRING: "should be a string",
        VAR_STRING_OR_NULL: "should be a string or null",
        VAR_OBJECT: "should be an object",
        VAR_ARRAY: "should be an array",
        VAR_BOOLEAN: "should be boolean",
        VAR_EXISTS: "should be sent"
    }
}