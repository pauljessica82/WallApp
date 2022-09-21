import Post from './Post'

const Feed = ({ posts  }) => {
	return (
		
		posts.map((post, index) => (
			<center>
			<Post key={index}
				post={post}
				/>
			</center>
			))
	)
}

export default Feed

