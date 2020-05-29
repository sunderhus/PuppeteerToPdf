import puppeteer from 'puppeteer';
import { uuid } from 'uuidv4';
import path from 'path';

const converter = async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const filename = `${uuid()}.pdf`;
    const pathDir = path.resolve(process.cwd(), 'pdfs');

    await page.setContent('<h1>Mnipulando PDF com Puppeteer!</h1>');
    await page.emulateMediaType('screen');

    await page.pdf({
      format: 'A4',
      printBackground: true,
      path: `${path.join(pathDir, filename)}`,
    });

    await browser.close();
    console.log('feitooooo');
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

converter();
