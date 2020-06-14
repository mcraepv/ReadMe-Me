// function to generate markdown for README
function generateMarkdown(data) {
  const title = data.title.trim();
  const description = data.description.trim();
  const install = data.install.trim();
  const usage = data.usage.trim();
  const contribute = data.contribute.trim();
  const test = data.test.trim();
  const github = data.github.trim();
  const email = data.email.trim();
  const license = data.license.trim();
  const year = data.year.trim();
  const name = data.name.trim();
  let descriptionText = "";
  let installText = "";
  let usageText = "";
  let contributeText = "";
  let testText = "";
  let licenseText = "";
  let badge = "";
  let tableOfContents = "## Table of Contents\n\n";

  switch (license) {
    //thanks to Lukas Himsel on GitHub for collecting the badges (https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)
    case "MIT License":
      badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      licenseText = `Copyright ${year} ${name}\n
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n`;
      break;
    case "Apache 2.0":
      badge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      licenseText = `Copyright ${year} ${name}\n
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License a\n
     http://www.apache.org/licenses/LICENSE-2.0\n
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.\n`;
      break;
    case "BSD 3-Clause License":
      badge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      licenseText = `Copyright ${year} ${name}\n
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n
1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n
3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.\n
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n`;
      break;
  }
  let result = `# ${title} ${badge}\n\n`;

  if (description !== "") {
    descriptionText += `${description}\n\n`;
  }
  if (install !== "") {
    installText += `## Installation\n\n${install}\n\n`;
    tableOfContents += `* [Installation](#installation)\n\n`;
  }
  if (usage !== "") {
    usageText += `## Usage\n\n${usage}\n\n`;
    tableOfContents += `* [Usage](#usage)\n\n`;
  }
  if (contribute !== "") {
    contributeText += `## Contributing\n\n${contribute}\n\n`;
    tableOfContents += `* [Contributing](#contributing)\n\n`;
  }
  if (test !== "") {
    testText += `## Tests\n\n${test}\n\n`;
    tableOfContents += `* [Tests](#tests)\n\n`;
  }
  tableOfContents += `* [License](#license)\n\n`;
  tableOfContents += `* [Questions](#questions)\n\n`;

  result +=
    descriptionText +
    tableOfContents +
    installText +
    usageText +
    contributeText +
    testText;
  result += `## License\n\n${licenseText}\n`;

  result += `## Questions\n\nReach out to me through email or on GitHub!\n\n### Github\n\nhttps://github.com/${github}\n\n### Email\n\n${email}\n`;
  return result;
}

module.exports = generateMarkdown;
