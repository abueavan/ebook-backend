const { env } = require('./env.js')
const UPLOAD_PATH = env === 'dev' ? 'D:/eavan/upload/admin-upload-ebook' : '/root/upload/admin-upload-ebook'

const OLD_UPLOAD_URL = 'dev' ? 'https://book.eavan.site/book/res/img' : 'https://www.eavan.site/book/res/img'

const UPLOAD_URL = 'dev' ? 'https://book.eavan.site/admin-upload-ebook' : 'https://www.eavan.site/admin-upload-ebook'

module.exports = {
  CODE_ERROR: -1,
  CODE_SUCCESS: 0,
  CODE_TOKEN_EXPIRED: -2,
  debug: true,
  PWD_SALT: 'admin_imooc_node',
  PRIVATE_KEY: 'admin_imooc_node_book_eavan_site',
  JWT_EXPIRED: 60 * 60, // token失效时间,
  UPLOAD_PATH,
  MIME_TYPE_EPUB: 'application/epub',
  UPLOAD_URL,
  OLD_UPLOAD_URL
}
