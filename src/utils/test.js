const getStatusColour = (orderStatus) => {
  let statusColour = ''
  switch (orderStatus) {
    case 'new':
      statusColour = 'bg-green-100 text-green-900'
      break
    case 'preparing':
      statusColour = 'bg-yellow-400 text-yellow-900'
      break
    case 'ready':
      statusColour = 'bg-blue-200 text-blue-800'
      break
    case 'delivered':
      statusColour = 'bg-green-300 text-green-800'
      break
    case 'failed':
      statusColour = 'bg-red-400 text-red-900'
      break
    default:
      statusColour = 'bg-gray-100 text-gray-800'
  }
  return statusColour
}

export { getStatusColour }
