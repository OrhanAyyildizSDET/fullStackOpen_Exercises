setTimeout(() => {
    console.log('loop..')
    let i = 0
    while (i < 50000000000) {
      console.log('loop..')
      i++
    }
    console.log('end')
  }, 5000)