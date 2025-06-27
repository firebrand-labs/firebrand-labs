"use client";
import { FC } from "react";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import {
  contactusFormSchema,
  contactusFormType,
} from "@/lib/validation/contact-us";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/app/_components/ui/text-area";
import { RadioGroup, RadioGroupItem } from "@/app/_components/ui/radio-group";
import { Icons } from "@/app/_components/icons";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";
interface ContactUsFormProps {}

type Purpose = "SERVICES" | "JOBS" | "PRODUCTS" | "OTHER";

const ContactUsForm: FC<ContactUsFormProps> = () => {
  const {
    handleSubmit,
    setValue,
    watch,
    reset,
    register,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<contactusFormType>({
    resolver: zodResolver(contactusFormSchema),
  });

  const createContact = api.contact.contactHandler.useMutation({
    onSuccess: async (data) => {
      console.log("Task updated Successfully", data);
      reset();
    },
    onError: (error) => {
      console.log("Error creating task:", error);
    },
  });

  const onSubmit = async function (formData: contactusFormType) {
    try {
      const res = await createContact.mutateAsync(formData);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-start justify-center gap-4 bg-yellow-level-four p-4 md:p-8  rounded-lg w-full"
    >
      <div className="flex items-start flex-col justify-start gap-2 w-full group relative">
        <Label
          htmlFor="Name"
          className="!text-extra-subtitle-heading uppercase text-background/75 leading-normal font-paragraph"
        >
          Name
        </Label>
        <Input
          id="Name"
          autoCapitalize="none"
          autoComplete="none"
          placeholder=" "
          className="w-full p-0 text-foreground bg-transparent border-0 border-b-2 border-background/75 appearance-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-transparent rounded-none  peer"
          type="text"
          {...register("name")}
          disabled={isSubmitting}
          required
        />

        {errors?.name ? (
          <p className="px-1 text-xs text-destructive h-4">
            {errors.name.message}
          </p>
        ) : (
          <p className="h-4"></p>
        )}
      </div>

      <div className="flex items-start flex-col justify-start gap-2 w-full relative">
        <Label
          htmlFor="Phone"
          className="!text-extra-subtitle-heading uppercase text-background/75 leading-normal font-paragraph"
        >
          Phone
        </Label>
        <Input
          id="Phone"
          autoCapitalize="none"
          autoComplete="none"
          placeholder=" "
          className="w-full p-0 text-foreground bg-transparent border-0 border-b-2 border-background/75 appearance-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-transparent rounded-none  peer"
          type="tel"
          required
          {...register("phone")}
          disabled={isSubmitting}
        />

        {errors?.phone ? (
          <p className="px-1 text-xs text-destructive h-4">
            {errors.phone.message}
          </p>
        ) : (
          <p className="h-4"></p>
        )}
      </div>
      <div className="flex items-start flex-col justify-start gap-2 w-full relative">
        <Label
          htmlFor="Email"
          className="!text-extra-subtitle-heading uppercase text-background/75 leading-normal font-paragraph"
        >
          Email Id
        </Label>
        <Input
          id="Email"
          autoCapitalize="none"
          autoComplete="none"
          placeholder=" "
          className="w-full p-0 text-foreground bg-transparent border-0 border-b-2 border-background/75 appearance-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-transparent rounded-none  peer"
          type="email"
          required
          {...register("email")}
          disabled={isSubmitting}
        />

        {errors?.email ? (
          <p className="px-1 text-xs text-destructive h-4">
            {errors.email.message}
          </p>
        ) : (
          <p className="h-4"></p>
        )}
      </div>

      <div className="flex flex-col lg:flex-row items-start md:items-center justify-start gap-4 w-full relative">
        <Label
          aria-required="true"
          className="!text-extra-subtitle-heading uppercase text-background/75 leading-normal font-paragraph"
          htmlFor="Purpose"
        >
          Let's talk about
        </Label>
        <div className="flex flex-row gap-2">
          {["SERVICES", "JOBS", "PRODUCTS", "OTHER"].map((item: string) => (
            <Button
              key={item}
              type="button"
              onClick={() => setValue("purpose", item as Purpose)}
              className={cn(
                "uppercase rounded-full flex items-center justify-center bg-transparent text-background cursor-pointer border-background border hover:bg-background hover:text-foreground active:bg-background active:text-foreground",
                watch("purpose") === item
                  ? "bg-background text-foreground"
                  : "text-background bg-transparent"
              )}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex items-start flex-col justify-start gap-2 w-full relative">
        <Label
          aria-required="true"
          className="!text-extra-subtitle-heading uppercase text-background/75 leading-normal font-paragraph"
          htmlFor="Message"
        >
          Message
        </Label>
        <Textarea
          required
          className="w-full p-0 text-foreground bg-transparent border-0 border-b-2 border-background/75 appearance-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-transparent rounded-none  peer"
          placeholder=" "
          {...register("message")}
          disabled={isSubmitting}
        />

        {errors?.message ? (
          <p className="px-1 text-xs text-destructive h-4">
            {errors.message.message}
          </p>
        ) : (
          <p className="h-4"></p>
        )}
      </div>
      <Button
        variant={"default"}
        type="submit"
        size={"lg"}
        className="bg-foreground border-1 border-black text-yellow-level-four rounded-full cursor-pointer hover:bg-foreground/80"
        disabled={isSubmitting}
      >
        Submit
        <Icons.ArrowRight className="stroke-yellow-level-four" />
      </Button>
    </form>
  );
};

export default ContactUsForm;
