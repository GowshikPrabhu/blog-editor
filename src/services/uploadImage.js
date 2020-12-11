import https from 'https';
import querystring from 'querystring';

/**
 * @description Upload the image to imgbb
 * @param {string} apiKey - Your imgBB API key
 * @param {string} base64string - Typically, the output of fileToString("path") function
 * @returns {Promise}
 */
const postToImgbb = (base64str, filename) =>
  new Promise((resolve, reject) => {
    const payload = querystring.stringify({
      image: base64str
    });

    const options = {
      hostname: 'api.imgbb.com',
      method: 'POST',
      timeout: 5000,
      path: `/1/upload?key=${process.env.IMGBB_API_KEY}&name=${filename}`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': payload.length
      }
    };

    const req = https
      .request(options, (res) => {
        let response = '';

        res.on('data', (d) => {
          response += d;
        });

        res.on('end', () => {
          const json = JSON.parse(response);

          if (
            json.status === 200 ||
            json.success === true ||
            json.status_code === 200
          ) {
            const output = json.data;
            resolve(output);
          } else {
            reject(json);
          }
        });
      })
      .on('error', (err) => {
        console.log(err);
        reject(err);
      });

    req.write(payload);

    req.end();
  });

const imageUploadHandler = async (blobInfo, success, failure, progress) => {
  let filename = blobInfo.filename();
  let date = new Date();
  let ms = date.getMilliseconds();
  filename = ms.toString().concat(filename);

  const base64string = blobInfo.base64();
  postToImgbb(base64string, filename)
    .then((res) => {
      console.log(res);
      success(res.display_url);
    })
    .catch((err) => {
      console.log('Failed', err);
      let code = err.status || err.status_code || 400;
      let status_text = err.status_text || 'Bad request';
      let message = err.error.message || 'Cannot upload image';
      failure(`${status_text} ${code}: ${message}`);
    });
};

export default imageUploadHandler;
