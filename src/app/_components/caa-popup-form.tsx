"use client";

import { FC, useEffect, useState } from "react";
import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import { useForm } from "react-hook-form";
import {
  BookDonwloadFormType,
  bookDownloadFormSchema,
} from "@/lib/validation/book-download";
import { Icons } from "@/app/_components/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import SelectCategory from "@/app/_components/select-category";
import { fetchCountries } from "@/lib/country-data";
import { CountryData } from "@/types";
import { z } from "zod";
import { AxiosError } from "axios";
import { useToast } from "@/app/_components/ui/use-toast";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";

const category: string[] = ["Category 1", "Category 2", "Category 3"];

interface CaaPopupFormProps {
  children: React.ReactNode;
}

const CaaPopupForm: FC<CaaPopupFormProps> = ({ children }) => {
  const [countryList, setCountryList] = useState<string[]>([]);

  const { toast } = useToast();
  const router = useRouter();

  const {
    handleSubmit,
    register,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<BookDonwloadFormType>({
    resolver: zodResolver(bookDownloadFormSchema),
    defaultValues: {
      country: "India",
    },
  });

  useEffect(() => {
    const fetchData = async function () {
      const countries = await fetchCountries();

      setCountryList(countries);
    };

    fetchData();
  }, []);

  const registerBook = api.contact.registerTheBook.useMutation({
    onSuccess: async (data) => {
      console.log("Task updated Successfully", data);
      router.push("/fabulous-brilliant-loveable-e-version-1.pdf");
      reset();
    },
    onError: (error) => {
      console.log("Error creating task:", error);
    },
  });

  const onSubmit = async function (formData: BookDonwloadFormType) {
    try {
      const res = await registerBook.mutateAsync(formData);
      console.log("res", res);
      if (res.length) {
        toast({
          title: "Thank you for the registration!",
          description: "You will be redirected to the downloading page.",
          variant: "default",
        });

        return reset();
      }
      return toast({
        title: "Something Went Wrong",
        description: "Please Check your data",
        variant: "destructive",
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError("email", { message: err.message });
        return;
      }
      if (err instanceof AxiosError) {
        setError("email", { message: err.response?.data });
        return;
      }

      setError("email", { message: "something went wrong" });
      return toast({
        title: "Something Went Wrong",
        description: "Please Check your data",
        variant: "destructive",
      });
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[80vh] md:max-w-[35vw]">
        <DialogHeader className="hidden" />
        <DialogTitle className="hidden" />
        <div className="flex flex-col items-center justify-center gap-6">
          <h3 className="font-paragraph text-tertiary-heading leading-normal text-foreground w-full">
            can we get to know you?
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="flex  items-start flex-col justify-start gap-2 w-full group relative">
              <Label
                htmlFor="Name"
                className="!text-extra-subtitle-heading lowercase text-foreground leading-normal font-paragraph"
              >
                Name
              </Label>
              <Input
                id="Name"
                autoCapitalize="none"
                autoComplete="none"
                placeholder=" "
                className="w-full  px-1.5 text-foreground bg-transparent border-1 border-foreground appearance-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-transparent rounded-none  peer"
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
                className="!text-extra-subtitle-heading lowercase text-foreground leading-normal font-paragraph"
              >
                Phone
              </Label>
              <Input
                id="Phone"
                autoCapitalize="none"
                autoComplete="none"
                placeholder=" "
                className="w-full px-1.5 text-foreground bg-transparent border-1 border-foreground appearance-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-transparent rounded-none  peer"
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
                className="!text-extra-subtitle-heading lowercase text-foreground leading-normal font-paragraph"
              >
                Email Id
              </Label>
              <Input
                id="Email"
                autoCapitalize="none"
                autoComplete="none"
                placeholder=" "
                className="w-full  px-1.5 text-foreground bg-transparent border-1 border-foreground appearance-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-transparent rounded-none  peer"
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

            <div className="flex items-start flex-col justify-start gap-2 w-full group relative">
              <Label
                htmlFor="City"
                className="!text-extra-subtitle-heading lowercase text-foreground leading-normal font-paragraph"
              >
                City
              </Label>
              <Input
                id="City"
                autoCapitalize="none"
                autoComplete="none"
                placeholder=" "
                className="w-full  px-1.5 text-foreground bg-transparent border-1 border-foreground appearance-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-transparent rounded-none  peer"
                type="text"
                {...register("city")}
                disabled={isSubmitting}
                required
              />

              {errors?.city ? (
                <p className="px-1 text-xs text-destructive h-4">
                  {errors.city.message}
                </p>
              ) : (
                <p className="h-4"></p>
              )}
            </div>
            <div className="flex items-start flex-col justify-start gap-2 w-full group relative">
              <SelectCategory<BookDonwloadFormType>
                disabled={isSubmitting}
                register={register}
                id="location"
                name="country"
                label="Country"
                category={countryList}
                className="min-w-full p-2 border border-gray-300 rounded-md text-foreground h-10 bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {errors?.country ? (
                <p className="px-1 text-xs text-destructive h-4">
                  {errors.country.message}
                </p>
              ) : (
                <p className="h-4"></p>
              )}
            </div>
            <Button
              variant={"outline"}
              type="submit"
              size={"lg"}
              className="border-1 border-foreground text-yellow-level-four rounded-full cursor-pointer hover:bg-foreground/10 hover:text-yellow-level-four"
              disabled={isSubmitting}
            >
              Submit
              <Icons.ArrowRight className="stroke-yellow-level-four" />
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaaPopupForm;
