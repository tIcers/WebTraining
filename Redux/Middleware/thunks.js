const remindMeTo = task => {
  return `Remember to ${task}!!!`;
}

const remindMeLater = task => {
  return () => {
    return remindMeTo(task)
  }
}

console.log(remindMeTo('study redux'))

const reminder = remindMeLater('bench press')

console.log(reminder())
