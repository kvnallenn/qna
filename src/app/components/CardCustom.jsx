import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CardCustom = () => {
  return (
    <>
      <Card className="w-[800px] bg-cardCustom border-none text-white">
        <CardContent className="p-4">
          <Textarea
            className="border-borderCustom placeholder:text-gray-1000 rounded-xl focus-visible:outline-none focus-visible:ring-0"
            placeholder="Type your question here."
          />
          <div className="flex items-center">
            <div className="mt-3">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="mt-3">
              <Input
                className="focus-visible:outline-none focus-visible:ring-0 text-labelCustom border-none placeholder:text-gray-400"
                type="text"
                placeholder="Your Name ( Optional )"
              />
            </div>
          
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default CardCustom;
