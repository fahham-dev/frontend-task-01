import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogFooter,
  AlertDialogHeader,
} from "./alert-dialog";

function ShowDialog({
  onClick,
  children,
  titleMessage = "Are you absolutely sure?",
  descriptionMessage = "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
  succeessButtonLabel = "Continue",
}: {
  onClick: () => void;
  children: React.ReactNode;
  titleMessage?: string;
  descriptionMessage?: string;
  succeessButtonLabel?: string;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{titleMessage}</AlertDialogTitle>
          <AlertDialogDescription>{descriptionMessage}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onClick}>
            {succeessButtonLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ShowDialog;
