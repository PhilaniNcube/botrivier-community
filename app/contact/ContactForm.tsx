import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  return (
    <section className="py-6 dark:bg-coolGray-800 dark:text-coolGray-50 min-h-screen flex items-center">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold">Get in touch</h1>
          <p className="pt-2 pb-4">
            To have your business listed on the BCV Directory, send us a message
          </p>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>065 8888 070</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>botrivier.community@gmail.com</span>
            </p>
          </div>
        </div>
        <form className="flex flex-col py-6  md:px-6 ng-untouched ng-pristine ng-valid">
          <Label htmlFor="fullname" className="block mb-1">
            <span className="">Full name</span>
            </Label>
            <Input
              type="text"
              name="fullname"
              placeholder="Leroy Jenkins"
              className="block mb-4 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-green-400 dark:bg-coolGray-800"
            />
          <Label htmlFor="email" className="block mb-1">
            <span className="">Email address</span>
            </Label>
            <Input
              type="email"
              name="email"
              placeholder="leroy@jenkins.com"
              className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-green-400 dark:bg-coolGray-800 mb-4"
            />
          <Label className="block mb-1">
            <span className="">Message</span>
            </Label>
            <Textarea
              rows={3}
              className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-400 dark:bg-coolGray-800"
            ></Textarea>
         <div className="mt-4">
          <Button type="submit" className="bg-green-600 w-1/2">Save</Button>
         </div>
        </form>
      </div>
    </section>
  );
};
export default ContactForm;
