//  type status code

type StatusCode = 200 | 201 | 400 | 401 | 403 | 404 | 500;

//  type error message

// type ErrorMessage =
//     | "Invalid params"
//     | "Passwords do not match"
//     | "Username is already taken"
//     | "Internal server error"
//     | "Username or password is invalid"
//     | "Refresh token is empty"
//     | "Unauthorized"
//     | "User not found"
//     | any;

//  type error
export type errorDto = {
    statusCode: StatusCode;
    statusMessage: any;
};
