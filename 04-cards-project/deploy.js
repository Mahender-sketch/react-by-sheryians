import ghpages from 'gh-pages';
import fs from 'fs';
import path from 'path';

const distPath = path.resolve('dist');
const targetPath = path.join(distPath, '04-card-project');

// create subfolder
if (!fs.existsSync(targetPath)) {
  fs.mkdirSync(targetPath);
}

// move all files into subfolder
fs.readdirSync(distPath).forEach(file => {
  if (file !== '07-ui-project') {
    fs.renameSync(
      path.join(distPath, file),
      path.join(targetPath, file)
    );
  }
});

ghpages.publish(distPath, {
  branch: 'gh-pages',
  message: 'Deploy 07-ui-project',
}, (err) => {
  if (err) console.error(err);
  else console.log('Deployed!');
});
