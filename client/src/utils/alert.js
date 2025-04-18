import Swal from "sweetalert2";

export function successAlert(text) {
  Swal.fire({
    title: "Success!",
    text: text,
    icon: "success",
    confirmButtonText: "Cool",
  });
}
export function errorAlert(text) {
  Swal.fire({
    title: "Error!",
    text: text,
    icon: "error",
    confirmButtonText: "Try again",
  });
}
