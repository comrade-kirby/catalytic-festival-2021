var ghpages = require('gh-pages');

ghpages.publish(
	'public', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/comrade-kirby/catalytic-festival-2021.git', // Update to point to your repository
		user: {
			name: 'Max', // update to use your name
			email: 'maxoppenheimer1993@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
