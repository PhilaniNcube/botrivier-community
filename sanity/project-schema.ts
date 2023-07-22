const project = {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      }
    },
    {
      name: 'start_date',
      title: 'Start Date',
      type: 'string',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
    },
    {
      name: 'coordinators',
      title: 'Coordinators',
      type: 'array',
      of:[{
        type: 'string',
      }]
    },
       {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{type: 'image', options: {hotspot: true}, fields: [{name: 'alt', title: "Alt", type: 'string'}]}],
        options: {
          layout: 'grid',
          hotspot: true,
          grid: {
            columns: 2
          }
        },


      },
       {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{type: 'block'}]
      }
  ]
}


export default project
