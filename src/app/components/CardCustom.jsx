import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CardCustom = () => {
  return (
        <Card className="w-[600px] bg-cardCustom border-none text-white">
          <CardContent>
            <Textarea
              className="border-borderCustom placeholder:text-gray-1000 rounded-xl focus-visible:outline-none focus-visible:ring-0 font-Inter"
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
                  className="focus-visible:outline-none focus-visible:ring-0 text-labelCustom border-none placeholder:text-gray-400 font-Inter"
                  type="text"
                  placeholder="Your Name ( Optional )"
                />
              </div>
              <Button className="text-white mt-3 ml-auto bg-green-600 hover:bg-green-700 font-Inter">
                Send
              </Button>
            </div>
          </CardContent>
        </Card>
  );
};

export default CardCustom;
