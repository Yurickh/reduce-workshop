function isSameTask(task, testTask) {
  const isExpectedUuid = task.uuid && task.uuid === testTask.uuid
  const isExpectedId = task.id && task.id === testTask.id

  return isExpectedUuid || isExpectedId
}

function updatedDuration(tasks, deletedTask, duration) {
  if (tasks.some(task => isSameTask(task, deletedTask))) {
    return duration - deletedTask.duration
  }

  return duration
}

function recreateObject(acc, [key, value]) {
  return {
    ...acc,
    [key]: value,
  }
}

export default function deleteTask(state, deletedTask) {
  const list = Object.entries(state.list)
    .map(([key, value]) => [
      key,
      {
        ...value,
        duration: updatedDuration(value.tasks, deletedTask, value.duration),
        tasks: value.tasks.filter(task => !isSameTask(task, deletedTask)),
      },
    ])
    .filter(([, value]) => value.tasks.length > 0)
    .reduce(recreateObject, {})

  return { ...state, list }
}

// Alternative approach with no reduces:
// export default function deleteTask(state, deletedTask) {
//   const { list } = state
//   const [day, found] = Object.entries(list)
//     .find(([, value]) => value.tasks.some(task => isSameTask(task, deletedTask)))
//
//   return {
//     ...state,
//     list: {
//       ...list,
//       [day]: found.tasks.length > 1
//         ? {
//           ...found,
//           duration: found.duration - deletedTask.duration,
//           tasks: found.tasks.filter(task => !isSameTask(task, deletedTask)),
//         }
//         : undefined,
//     },
//   }
// }
