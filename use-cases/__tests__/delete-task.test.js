import deleteTask from '../delete-task'

describe('deleteTask', () => {
  const tasks = {
    list: {
      20180201: {
        duration: 14400000,
        tasks: [
          {
            id: 2,
            description: 'task item 1',
            start: new Date(2018, 1, 1, 10, 0, 0),
            end: new Date(2018, 1, 1, 12, 0, 0),
            duration: 7200000,
            userId: 1,
            projectId: 1,
            reportId: 1,
          },
          {
            id: 1,
            description: 'task item 2',
            start: new Date(2018, 1, 1, 8, 0, 0),
            end: new Date(2018, 1, 1, 10, 0, 0),
            duration: 7200000,
            userId: 1,
            projectId: 1,
            reportId: 1,
          },
        ],
      },
      20180202: {
        duration: 7200000,
        tasks: [
          {
            id: 3,
            description: 'task item 3',
            start: new Date(2018, 1, 2, 8, 0, 0),
            end: new Date(2018, 1, 2, 10, 0, 0),
            duration: 7200000,
            userId: 1,
            projectId: 1,
            reportId: 1,
          },
        ],
      },
      20180203: {
        duration: 7200000,
        tasks: [
          {
            id: null,
            uuid: '123456789',
            description: 'task item 3',
            start: new Date(2018, 1, 3, 8, 0, 0),
            end: new Date(2018, 1, 3, 10, 0, 0),
            duration: 7200000,
            userId: 1,
            projectId: 1,
            reportId: 1,
            local: true,
          },
        ],
      },
    },
    fetching: false,
  }

  it('should remove offline task from store', () => {
    const taskToDelete = tasks.list[20180201].tasks[0]

    expect(deleteTask(tasks, taskToDelete)).toEqual({
      ...tasks,
      list: {
        ...tasks.list,
        20180201: {
          duration: tasks.list[20180201].tasks[1].duration,
          tasks: [tasks.list[20180201].tasks[1]],
        },
      },
    })
  })

  it('should remove offline last task of day from store', () => {
    const task = tasks.list[20180203].tasks[0]

    expect(deleteTask(tasks, task).list).toEqual({
      20180201: tasks.list[20180201],
      20180202: tasks.list[20180202],
    })
  })
})
