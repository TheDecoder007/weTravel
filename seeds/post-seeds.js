const { Post } = require('../models');

const postdata = [
  {
    title: 'Fun in the sun',
    description: 'Great Trip with Friends',
	filename: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 10
  },
  {
    title: 'Cruising in Cuba',
    description: 'Great Trip with Friends',
	filename: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 8
  },
  {
    title: 'Big Sky Country',
    description: 'Great Trip with Friends',
	filename: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 1
  },
  {
    title: 'Bathing in the dead sea',
    description: 'Great Trip with Friends',
	filename: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 4
  },
  {
    title: 'Everest Base Camp Trek',
    description: 'Great Trip with Friends',
	filename: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 7
  },
  {
    title: 'Exploring Egypt',
    description: 'Great Trip with Friends',
	filename: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 4
  },
  {
    title: 'Australia Adventure',
    description: 'Great Trip with Friends',
	filename: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 1
  },
  {
    title: 'Fun in the sun',
    description: 'Great Trip with Friends',
	filename: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 1
  },
  {
    title: 'Fun in the sun',
    description: 'Great Trip with Friends',
	filename: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 9
  },
  {
    title: 'Fun in the sun',
    description: 'Great Trip with Friends',
	filename: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 5
  },
  {
    title: 'Fun in the sun',
    description: 'Great Trip with Friends',
	filename: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 3
  },
  {
    title: 'Fun in the sun',
    description: 'Great Trip with Friends',
	filename: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 10
  },
  {
    title: 'Fun in the sun',
    description: 'Great Trip with Friends',
	filename: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 8
  },
  {
    title: 'Fun in the sun',
    description: 'Great Trip with Friends',
	filename: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 3
  },
  {
    title: 'Fun in the sun',
    description: 'Great Trip with Friends',
	filename: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 3
  },
  {
    title: 'Fun in the sun',
    description: 'Great Trip with Friends',
	filename: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 7
  },
  {
    title: 'Fun in the sun',
    description: 'Great Trip with Friends',
	filename: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 6
  },
  {
    title: 'Fun in the sun',
    description: 'Great Trip with Friends',
	filename: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 4
  },
  {
    title: 'Fun in the sun',
    description: 'Great Trip with Friends',
	filename: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 6
  },
  {
    title: 'Fun in the sun',
    description: 'Great Trip with Friends',
	filename: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;