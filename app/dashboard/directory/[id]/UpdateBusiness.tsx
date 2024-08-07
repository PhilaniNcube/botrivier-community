"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { Database } from "@/schema";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { createClient } from "@/utils/supabase/client";

type Props = {
  types: Database["public"]["Tables"]["business_directory"]["Row"][];
  business: Database["public"]["Tables"]["directory"]["Row"];
  business_types: Database["public"]["Tables"]["business_type"]["Row"][];
};

const formSchema = z.object({
  business_name: z.string().min(2).max(50),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
  website: z.string(),
  phone_number: z.string(),
  business_types: z.array(z.string()),
});

const UpdateBusiness = ({ types, business, business_types }: Props) => {
  const supabase = createClient()

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      business_name: business.business_name || "",
      first_name: business.first_name || "",
      last_name: business.last_name || "",
      email: business.last_name || "",
      website: business.website || "",
      phone_number: business.phone_number || "",
      business_types: types.map((type) => type.business_type.id) || [],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);


    console.log(values);

    const { data: businessUpdate, error: businessError } = await supabase
      .from("directory")
      .update({
        business_name: values.business_name,
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        website: values.website,
        phone_number: values.phone_number,
      }).eq('id', business.id)
      .select("*")
      .single();

    if (businessError) {
      alert("There was an error creating your business. Please try again.");
      setLoading(false);
      return;
    }

    //delete all business types for this business.id
    const { error: deleteError } = await supabase
      .from("business_directory")
      .delete()
      .eq("directory_id", business.id);

    if (deleteError) {
      alert("There was an error creating your business. Please try again.");
      setLoading(false);
    }

    const { data: businessType, error } = await supabase
      .from("business_directory")
      .upsert(
        values.business_types.map((business_type) => ({
          business_type: business_type,
          directory_id: business?.id,
        }))
      );

    if (error) {
      alert("There was an error creating your business. Please try again.");
      setLoading(false);
      return;
    }

    console.log({ businessType });
    setLoading(false);
    router.push("/dashboard/directory");
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-xl">
          <div className="grid w-full grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="business_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Business Name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid w-full grid-cols-2 gap-3 mt-4">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid w-full grid-cols-2 gap-3 mt-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input type="tel" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full mt-4">
            <FormField
              control={form.control}
              name="business_types"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">Business Type</FormLabel>
                    <FormDescription>Select the business types</FormDescription>
                  </div>
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    {" "}
                    {business_types?.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="business_types"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(
                                    item.id
                                  )}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          item.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) =>
                                              value !== item.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {item.title}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="mt-6 w-[300px]">
            {loading ? "Loading" : "Save"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default UpdateBusiness;
