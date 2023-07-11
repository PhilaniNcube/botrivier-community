import AddProject from "./AddProject";

const page = async () => {
  return <main className="w-full">
    <h1 className="text-2xl font-medium text-slate-700">Create New Project</h1>
    <AddProject />
  </main>;
};
export default page;
