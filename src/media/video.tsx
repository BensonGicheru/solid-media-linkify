import { cleanLink } from './util'

import Link from './link'

export default function Video(props) {
	return (
		<Link url={props.url} blank>
			<video
				loop
				autoplay
				muted
				src={props.url.replace(cleanLink, '')}
				alt={props.url}
				title={props.url}
				oncanplay={props.scroll}
			>
				<source src={props.url.replace(cleanLink, '')} />
			</video>
		</Link>
	)
}
