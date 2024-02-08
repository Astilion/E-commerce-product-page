import avatar from "../../assets/image-avatar.png";
export default function UserProfileButton() {
	return (
		<div className='full w-max'>
			<button className='py-1 px-3'>
				<img
					src={avatar}
					className='w-10 lg:w-14 border-solid border-transparent border-2 rounded-full hover:border-orange-400 hover:border-[3px] transition'
					alt='User Profile'
				/>
			</button>
		</div>
	);
}
