"use client"
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
import { type ChangeEvent, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import format from "date-fns/format";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import slugify from "slugify";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string(),
  start_date: z.date({
    required_error: "A start date is required.",
  }),
  completed: z.boolean().default(false),
});

const AddProject = () => {

  const supabase = createClientComponentClient<Database>();

    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const [images, setImages] = useState<string[]>([])

    console.log(images)

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        title: "",
        description: "",
        completed: false,
      },
    });


    const uploadImages = async (e: ChangeEvent<HTMLInputElement>) => {
       setLoading(true);
       const files = e.target.files;

      const file = files?.[0];

      if (!file) return;

      const filename =
        // biome-ignore lint/style/useTemplate: <explanation>
        slugify(file.name.split(".")[0], {
          lower: true,
        }) +
        "_" +
        Math.ceil(Math.random() * 25);

          const fileExtension = file.name.split(".").pop();

          const uploadName = `${filename}.${fileExtension}`;

           const { data, error } = await supabase.storage
             .from("projects")
             .upload(uploadName, file);

             if (error) {
                console.log(error);
                alert(`Upload failed - ${error.message}`);
                setLoading(false);
                return;
             }

             const url =
               "https://hgacolkudbpybkhyklvf.supabase.co/storage/v1/object/public/projects/";

             setImages((images) => [...images, `${url}${data.path}`]);
             alert("Upload successful");
              setLoading(false);
    }

     async function onSubmit(values: z.infer<typeof formSchema>) {
      setLoading(true)
      console.log(values)

      const { data, error } = await supabase.from("projects").insert([{
        title: values.title,
        description: values.description,
        completed: values.completed,
        start_date: values.start_date.toISOString(),
        images: images
      }]).select("*").single()

      if (error) {
        console.log(error);
        alert(`Failed to save project - ${error.message}`);
        setLoading(false);
        return;
      }
      console.log(data)
      alert("Project saved successfully");
      setLoading(false);
     }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-3xl mt-8"
      >
        <div className="mb-4">
          {" "}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Title</FormLabel>
                <FormControl>
                  <Input placeholder="Project Title" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-4">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe project"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="start_date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Start Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}

                    onSelect={field.onChange}
                    // disabled={(date) =>
                    //   date > new Date() || date < new Date("1900-01-01")
                    // }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-4">
          <Label htmlFor="images">Upload your image</Label>
          <Input
            name="image"
            id="image"
            onChange={uploadImages}
            type="file"
            accept="image/*"
            placeholder="Upload Image"
          />

        </div>
        <div className="mt-4">
          <Button className="w-[280px]" type="submit" disabled={loading}>{loading ? 'Loading...' : 'Save'}</Button>
        </div>
      </form>
    </Form>
  );
};
export default AddProject;

