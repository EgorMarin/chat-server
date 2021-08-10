const chatsData = [
  { id: 1, sender: 'Lena', receiver: 'Egor', description: 'lorem ipsum asdasd' },
  { id: 2, sender: 'Ira', receiver: 'Egor', description: 'bakala ipsum asdasd' },
]

const messagesData = [
  { id: 1, text: 'Hello Egor', sender: 'Irina' },
  { id: 2, text: 'Hello Ira', sender: 'Egor' },
  { id: 3, text: 'How are you?', sender: 'Irina' },
  { id: 4, text: 'Fine!', sender: 'Egor' },
  { id: 5, text: 'i think', sender: 'Irina' },
  { id: 6, text: 'what?', sender: 'Egor' },
  { id: 7, text: 'it will be tough', sender: 'Irina' },
  { id: 8, text: 'for me', sender: 'Irina' },
  { id: 9, text: 'you know me', sender: 'Irina' },
  { id: 10, text: 'i couldnt do this', sender: 'Irina' },
  { id: 11, text: 'of course i understand you Irina', sender: 'Egor' },
  { id: 12, text: 'but we need this project', sender: 'Egor' },
  { id: 13, text: 'its all about home?', sender: 'Egor' },
  { id: 14, text: 'no no', sender: 'Irina' },
  { id: 15, text: 'its too dificult for me, really', sender: 'Irina' },
  { id: 16, text: 'Okey', sender: 'Egor' },
  { id: 17, text: 'and all?', sender: 'Irina' },
  { id: 18, text: 'what you want me to saying?', sender: 'Egor' },
  { id: 19, text: 'something apropriately', sender: 'Irina' },
  { id: 20, text: 'my apologies?', sender: 'Egor' },
  { id: 21, text: 'are you kiding me? No!', sender: 'Irina' },
  { id: 22, text: 'and what?', sender: 'Egor' },
  { id: 23, text: 'you are dumb', sender: 'Irina' },
  { id: 24, text: 'if you whant me to stay away', sender: 'Irina' },
  { id: 25, text: 'lets do this', sender: 'Irina' },
  { id: 26, text: 'go', sender: 'Egor' },
  { id: 27, text: 'are you sure?', sender: 'Irina' },
  { id: 28, text: '100%', sender: 'Egor' },
  { id: 29, text: 'i will give you money', sender: 'Irina' },
  { id: 30, text: 'i dont need this. I have mine', sender: 'Egor' },
  { id: 31, text: 'When did you become the rich person?', sender: 'Irina' },
  { id: 32, text: 'I have always been him', sender: 'Egor' },
]

const getChats = ({ user }) => 
  chatsData.filter(({ sender, receiver }) => 
    sender === user || receiver === user
  )

const getMessages = ({ page = 1, limit = 10 }) => {
  const start = page == 1 ? page - 1 : (page - 1) * limit
  const end = Number(limit)

  const spliceArr = [...messagesData].reverse().splice(start, end)

  return spliceArr.reverse()
}

const postMessage = (message) => messagesData.push(message)

module.exports = {
  getChats,
  getMessages,
  postMessage,
}