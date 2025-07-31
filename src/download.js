export function initResumeDownload(buttonId = 'download-resume', containerId = 'resume') {
  const button = document.getElementById('download-resume');
  const resumeEl = document.getElementById('resume');

  button.addEventListener('click', () => {
    button.style.display = 'none';
    
    const opt = {
      margin:       0.5,
      filename:     'resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(resumeEl).save().then(() => {
        button.style.display = '';
    }).catch(err => {
        console.error('Ошибка при генерации PDF:', err);
        button.style.display = '';
    });
  });
};

