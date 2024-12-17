export const ROUTES = {
  ROOT: "/",
  LOGIN: "/login",
  CATEGORY: "/category",
  CAR: "/car",
  ADD_CATEGORY: "/add-category",
  SIGN_UP: "/signup",
};

export const MENU_ITEM_KEYS = {
  ROOT: "Dashboard",
  CATEGORIES: "Categories",
  CARS: "Cars",
};

export const MESSAGES = {
  DELETE_CATEGORY: "Are You Sure, You want to Delete Category.",
  DELETE_CAR: "Are You Sure, You want to Delete Car.",

  CATEGORY_ADD_SUCCESS: "Category Has Been added Successfully",
  CATEGORY_EDIT_SUCCESS: "Category Has Been edited Successfully",
  CAR_ADD_SUCCESS: "Car Has Been added Successfully",
  CAR_EDIT_SUCCESS: "Car Has Been edited Successfully",
  ERROR: "Some Error Occured",
  CATEGORY_DELETED: "🗑 Category deleted successfully",
  CAR_DELETED: "🗑 Car deleted successfully",
  LOGIN_SUCCESS: "Logged in successfully",
  LOGIN_ERROR: "Incorrect email/password",
  ERROR_OCCURED: "Error Occured",
  CATEGORY_NAME_ERROR: "Please enter a name for the Category!",
  CATEGORY_REQUIRED: "Please Select Category",
  CAR_REGISTRATION_NO_ERROR: "Please enter a Registration No for the Car!",

  NOTE_CREATED: "Note Created Successfully",
  NOTE_UPDATED: "Note Updated Successfully",
  NOTE_DELETED: "Note Deleted Successfully",
  NOTE_DELETE_WARNING: "Are You sure, You want to delete note.",
  DELETE_NOTE: "Delete Note",
  CAR_MODEL_ERROR: "Please Enter Model For Car!",
  CAR_COLOR_ERROR: "Please Enter Color For Car!",
  EMAIL_VALIDATION: "Please enter a valid email address!",
  EMAIL_REQUIRED: "Please enter your email address!",
  PASSWORD_REQUIRED: "Please enter a password!",
  PASSWORD_LENGTH_VALIDATION: "Password must be at least 8 characters long!",
  PASSWORD_CHARACTERS_VALIDATION:
    "Password must contain at least one uppercase letter, one lowercase letter, and one number!",
  EMPTY_SPACES_NOT_ALLOWED: "Please remove empty spaces from this field.",
  ONLY_NUMBERS_ALLOW: "Please Enter only Numeric Values.",
  ONLY_ALPHANUMERIC_VALUES_AND_SPACE_ALLOWED:
    "Only alphanumeric characters and spaces allowed",
};

export const AUTH_TOKEN = "Authorization";

export const LOCAL_STORAGE = {
  ID_TOKEN: "token",
  USER: "user",
};

export const TITLES = {
  NO_OF_REGISTERED_CARS: "Registered Cars",
  EDIT_CATEGORY: "Edit Category",
  ADD_CATEGORY: "Add Category",
  ADD_CAR: "Add Car",
  EDIT_CAR: "Edit Car",
  LOGIN: "Login",
  SIGN_UP: "Signup",
};

export const BUTTON_TITLES = {
  EDIT: "Edit",
  DELETE: "Delete",
  ADD: "Add",
  ADD_CATEGORY: "Add Category",
  ADD_CAR: "Add Car",
  SIGN_UP: "Signup",
  LOGIN: "Login",
};

export const POPOVER_TITLES = {
  DELETE_CATEGORY: "Delete Category",
  DELETE_CAR: "Delete Car",
};

export const ACTION_ITEMS = [
  {
    action: "edit",
    value: "Edit",
  },
  {
    action: "delete",
    value: "Delete",
  },
];

export const LABELS = {
  NAME: "Name",
  REGISTRATION_NO: "Registration No",
  COLOR: "Color",
  MODEL: "Model",
  CATEGORY: "Category",
};

export const PLACE_HOLDERS = {
  CATEGORY_NAME: "Category Name",
  REGISTRATION_NO: "Registration No",
  COLOR: "Color",
  MODEL: "Model",
  SELECT_CATEGORY: "Select Category",
  EMAIL: "Email",
};

export const REDIRECTION_TEXTS = {
  DO_NOT_HAVE_AN_ACCOUNT: "Don't have account",
  ALREADY_HAVE_AN_ACCOUNT: "Already have account",
};
