import { useSignupContext } from "@/app/contexts/SignupContext";
import { Button } from "flowbite-react";

function ConfirmationBox({ confirmationLabel }: { confirmationLabel: string }) {
  const { onShowConfirm, form } = useSignupContext();
  return (
    <>
      <div
        className="w-full h-full  bg-white2/30 backdrop-blur-sm absolute z-10 "
        onClick={() => onShowConfirm(false)}
      ></div>
      <div className="w-[40%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 pt-10 pb-8 shadow-lg bg-white rounded-lg z-20">
        <p className="text-lg">{confirmationLabel}</p>
        <div className="flex gap-4 justify-end mt-5">
          <Button
            color="purple"
            onClick={() => {
              form.current.dispatchEvent(
                new Event("submit", { cancelable: true, bubbles: true })
              );
              onShowConfirm(false);
            }}
          >
            Iya
          </Button>
          <Button
            color="purple"
            onClick={() => {
              onShowConfirm(false);
            }}
          >
            Tidak
          </Button>
        </div>
      </div>
    </>
  );
}

export default ConfirmationBox;
