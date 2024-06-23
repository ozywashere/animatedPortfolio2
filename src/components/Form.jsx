"use client"
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {User, MailIcon, ArrowRightIcon, MessageSquare} from "lucide-react";

const Form = () => {
    return (
        <form className="flex flex-col gap-y-4">
            <div className="relative flex items-center ">
                <Input type="name" id="name" placeholder="Name"/>
                <User className="absolute right-6" size={20}/>
            </div>
            <div className="relative flex items-center ">
                <Input type="name" id="name" placeholder="Name"/>
                <MailIcon className="absolute right-6" size={20}/>
            </div>
            <div className="relative flex items-center ">
                <Input type="email" id="email" placeholder="Email"/>
                <ArrowRightIcon className="absolute right-6" size={20}/>
            </div>
            <div className="relative flex items-center ">
                <Textarea id="message" placeholder="Message"/>
                <MessageSquare className="absolute right-6 top-4" size={20}/>
            </div>
            <Button type="submit" className="w-[200px] h-[54px] bg-primary rounded-full text-white">Let's Talk
                <ArrowRightIcon size={20} className="ml-2"/>
            </Button>

        </form>
    );
};

export default Form;