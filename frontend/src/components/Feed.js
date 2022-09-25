import Post from './Post'

const Feed = ({ posts  }) => {
	return (
		
		[...posts].reverse().map((post) => (
			<center key={post.id}>
			<Post 
					post={post}
					
				/>
			</center>
			))
	)
}

export default Feed

