import React from "react";
import {HomeIcon, MailIcon, PhoneIcon} from "lucide-react";
import Form from "@/components/Form";

const Contact = () => {
    return <section className="">
        <div className="container">
            <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
                <div className="flex flex-col justify-center">
                    {/*  info text*/}
                    <div className="flex items-center gap-x-4">
                        <span className="w-[30px] h-[2px] bg-primary"></span>
                        Say Hello
                    </div>
                    <h1 className="h1 max-w-md mb-8">Let's Work Together.</h1>
                    <p className="description max-w-[400px]">lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel.
                    </p>
                </div>
                {/*illustration*/}
                <div
                    className="hidden xl:flex w-full bg-contact_shape_light dark:bg-contact_shape_dark bg-contain bg-top bg-no-repeat">
                </div>
            </div>
            {/*info text  text form*/}
            <div className="grid xl:grid-cols-2 mb-24 xl:mb-32 xl:text-lg text-base gap-y-4">

                <div className=" flex flex-col gap-y-4 xl:gap-y-14">
                    <div className="flex items-center gap-x-8">
                        <MailIcon size={24} className="text-primary"/>
                        <div>yourmail@gmail.com</div>
                    </div>
                    <div className="flex items-center gap-x-8">
                        <HomeIcon size={24} className="text-primary"/>
                        <div>
                            123, Main Street, New York, USA
                        </div>
                    </div>
                    <div className="flex items-center gap-x-8">
                        <PhoneIcon size={24} className="text-primary"/>
                        <div>
                            123-456-7890
                        </div>
                    </div>
                </div>
                {/*form*/}
                <Form/>


            </div>
        </div>
    </section>;
};

export default Contact;
