var
	paths = {
		src : './src/',
		dist: './dist/'
	},
	config = {
		entry: {
			html5UploadImg: paths.src + 'html5UploadImg'
		},
		output: {
			path: paths.dist,
			filename: '[name].js',
			chunkFilename: "[id].chunk.js"
		},
		resolve: {
			root: paths.src + 'libs/',
			alias: {
				JPEGEncoder: 'jpeg_encoder_basic',
				EXIF: 'exif',
				MegaPixImage: 'megapix-image'
			}
		}
	};

module.exports = config;