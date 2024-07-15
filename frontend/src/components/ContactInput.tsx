"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  ContactBodyType,
  ContactBody,
} from "@/schemaValidations/contact.schama";
import { postData } from "@/config/api.config";

const ContactInput = () => {
  const form = useForm<ContactBodyType>({
    resolver: zodResolver(ContactBody),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: ContactBodyType) {
    postData("contacts", values);
    values && form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex gap-2 justify-between"
        noValidate
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  className="border-none outline-none shadow-none focus-visible:ring-0"
                  placeholder="Enter your email address"
                  {...field}
                  type="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="max-w-24 max-h-9 bg-third-50 text-third-5 text-sm shadow-none"
        >
          Get Started
        </Button>
      </form>
    </Form>
  );
};

export default ContactInput;
