export default function getFormFieldTypeByError(error) {
  switch (error.code) {
    case "E_WRONG_PASSWORD":
      return "password";
    case "E_REVISION_EXISTS":
      return "name";
    case "E_USER_EXISTS":
      return "name";
    case "E_PROJECT_EXISTS":
      return "name";
    case "E_FUZZER_EXISTS":
      return "name";
    case "E_INTEGRATION_EXISTS":
      return "name";
    case "E_IMAGE_NOT_FOUND":
      return "image";
    case "E_IMAGE_NOT_READY":
      return "image";
    case "E_NODE_CPU_INVALID":
      return "cpu";
    case "E_CPU_USAGE_INVALID":
      return "cpu";
    case "E_NODE_RAM_INVALID":
      return "ram";
    case "E_RAM_USAGE_INVALID":
      return "ram";
    case "E_CPU_RAM_MULTIPLICITY_BROKEN":
      return "ram";
    case "E_TMPFS_SIZE_INVALID":
      return "tmpfs";
    case "E_TOTAL_RAM_USAGE_INVALID":
      return "common";
    case "E_INVALID_MEM_PER_CORE":
      return "common";
    case "E_MUST_UPLOAD_BINARIES":
      return "binaries";
    case "E_POOL_NOT_FOUND":
      return "pool";
    case "E_POOL_EXISTS":
      return "pool";
    case "E_POOL_LOCKED":
      return "pool";
    case "E_UPLOAD_FAILURE":
      return error.type;
    case "E_FILE_TOO_LARGE":
      return error.type;
    case "E_FILE_NOT_ARCHIVE":
      return error.type;
    case "E_JSON_FILE_IS_INVALID":
      return error.type;

    default:
      return "notification";
  }
}
