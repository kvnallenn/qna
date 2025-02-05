import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const LoginPage = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" className="bg-white text-black font-bold" type="submit">Login</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Login</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          tes
          <DialogFooter>
            tes
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LoginPage;
