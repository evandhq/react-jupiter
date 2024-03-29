import { createGlobalStyle } from 'styled-components';

const FontStyle = createGlobalStyle`
  span.jupiter-file-font {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'JupiterfilesImgs' !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-doc .path1:before {
    content: "\\e900";
    color: rgb(59, 65, 65);
  }
  .icon-doc .path2:before {
    content: "\\e901";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-doc .path3:before {
    content: "\\e902";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-doc .path4:before {
    content: "\\e903";
    margin-left: -0.7509765625em;
    color: rgb(254, 254, 254);
  }
  .icon-doc .path5:before {
    content: "\\e904";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-doc .path6:before {
    content: "\\e905";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-doc .path7:before {
    content: "\\e906";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-doc .path8:before {
    content: "\\e907";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-doc-light .path1:before {
    content: "\\e908";
    color: rgb(210, 210, 210);
  }
  .icon-doc-light .path2:before {
    content: "\\e909";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-doc-light .path3:before {
    content: "\\e90a";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-doc-light .path4:before {
    content: "\\e90b";
    margin-left: -0.7509765625em;
    color: rgb(254, 254, 254);
  }
  .icon-doc-light .path5:before {
    content: "\\e90c";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-doc-light .path6:before {
    content: "\\e90d";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-doc-light .path7:before {
    content: "\\e90e";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-doc-light .path8:before {
    content: "\\e90f";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-jpg .path1:before {
    content: "\\e910";
    color: rgb(59, 65, 65);
  }
  .icon-jpg .path2:before {
    content: "\\e911";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-jpg .path3:before {
    content: "\\e912";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-jpg .path4:before {
    content: "\\e913";
    margin-left: -0.7509765625em;
    color: rgb(254, 254, 254);
  }
  .icon-jpg .path5:before {
    content: "\\e914";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-jpg .path6:before {
    content: "\\e915";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-jpg-light .path1:before {
    content: "\\e916";
    color: rgb(210, 210, 210);
  }
  .icon-jpg-light .path2:before {
    content: "\\e917";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-jpg-light .path3:before {
    content: "\\e918";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-jpg-light .path4:before {
    content: "\\e919";
    margin-left: -0.7509765625em;
    color: rgb(254, 254, 254);
  }
  .icon-jpg-light .path5:before {
    content: "\\e91a";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-jpg-light .path6:before {
    content: "\\e91b";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-mp3 .path1:before {
    content: "\\e91c";
    color: rgb(59, 65, 65);
  }
  .icon-mp3 .path2:before {
    content: "\\e91d";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-mp3 .path3:before {
    content: "\\e91e";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-mp3 .path4:before {
    content: "\\e91f";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-mp3 .path5:before {
    content: "\\e920";
    margin-left: -0.7509765625em;
    color: rgb(254, 254, 254);
  }
  .icon-mp3-light .path1:before {
    content: "\\e921";
    color: rgb(210, 210, 210);
  }
  .icon-mp3-light .path2:before {
    content: "\\e922";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-mp3-light .path3:before {
    content: "\\e923";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-mp3-light .path4:before {
    content: "\\e924";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-mp3-light .path5:before {
    content: "\\e925";
    margin-left: -0.7509765625em;
    color: rgb(254, 254, 254);
  }
  .icon-mp4 .path1:before {
    content: "\\e926";
    color: rgb(59, 65, 65);
  }
  .icon-mp4 .path2:before {
    content: "\\e927";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-mp4 .path3:before {
    content: "\\e928";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-mp4 .path4:before {
    content: "\\e929";
    margin-left: -0.7509765625em;
    color: rgb(254, 254, 254);
  }
  .icon-mp4 .path5:before {
    content: "\\e92a";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-mp4 .path6:before {
    content: "\\e92b";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-mp4-light .path1:before {
    content: "\\e92c";
    color: rgb(210, 210, 210);
  }
  .icon-mp4-light .path2:before {
    content: "\\e92d";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-mp4-light .path3:before {
    content: "\\e92e";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-mp4-light .path4:before {
    content: "\\e92f";
    margin-left: -0.7509765625em;
    color: rgb(254, 254, 254);
  }
  .icon-mp4-light .path5:before {
    content: "\\e930";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-mp4-light .path6:before {
    content: "\\e931";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-pdf .path1:before {
    content: "\\e932";
    color: rgb(59, 65, 65);
  }
  .icon-pdf .path2:before {
    content: "\\e933";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-pdf .path3:before {
    content: "\\e934";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-pdf .path4:before {
    content: "\\e935";
    margin-left: -0.7509765625em;
    color: rgb(254, 254, 254);
  }
  .icon-pdf .path5:before {
    content: "\\e936";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-pdf-light .path1:before {
    content: "\\e937";
    color: rgb(210, 210, 210);
  }
  .icon-pdf-light .path2:before {
    content: "\\e938";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-pdf-light .path3:before {
    content: "\\e939";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-pdf-light .path4:before {
    content: "\\e93a";
    margin-left: -0.7509765625em;
    color: rgb(254, 254, 254);
  }
  .icon-pdf-light .path5:before {
    content: "\\e93b";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-png .path1:before {
    content: "\\e93c";
    color: rgb(59, 65, 65);
  }
  .icon-png .path2:before {
    content: "\\e93d";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-png .path3:before {
    content: "\\e93e";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-png .path4:before {
    content: "\\e93f";
    margin-left: -0.7509765625em;
    color: rgb(254, 254, 254);
  }
  .icon-png .path5:before {
    content: "\\e940";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-png-light .path1:before {
    content: "\\e941";
    color: rgb(210, 210, 210);
  }
  .icon-png-light .path2:before {
    content: "\\e942";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-png-light .path3:before {
    content: "\\e943";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-png-light .path4:before {
    content: "\\e944";
    margin-left: -0.7509765625em;
    color: rgb(254, 254, 254);
  }
  .icon-png-light .path5:before {
    content: "\\e945";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-pptx .path1:before {
    content: "\\e946";
    color: rgb(59, 65, 65);
  }
  .icon-pptx .path2:before {
    content: "\\e947";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-pptx .path3:before {
    content: "\\e948";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-pptx .path4:before {
    content: "\\e949";
    margin-left: -0.7509765625em;
    color: rgb(254, 254, 254);
  }
  .icon-pptx .path5:before {
    content: "\\e94a";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-pptx .path6:before {
    content: "\\e94b";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-pptx .path7:before {
    content: "\\e94c";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-pptx .path8:before {
    content: "\\e94d";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-pptx .path9:before {
    content: "\\e94e";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-pptx .path10:before {
    content: "\\e94f";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-pptx .path11:before {
    content: "\\e950";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-pptx .path12:before {
    content: "\\e951";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-pptx .path13:before {
    content: "\\e952";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-pptx-light .path1:before {
    content: "\\e953";
    color: rgb(210, 210, 210);
  }
  .icon-pptx-light .path2:before {
    content: "\\e954";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-pptx-light .path3:before {
    content: "\\e955";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-pptx-light .path4:before {
    content: "\\e956";
    margin-left: -0.7509765625em;
    color: rgb(254, 254, 254);
  }
  .icon-pptx-light .path5:before {
    content: "\\e957";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-pptx-light .path6:before {
    content: "\\e958";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-pptx-light .path7:before {
    content: "\\e959";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-pptx-light .path8:before {
    content: "\\e95a";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-pptx-light .path9:before {
    content: "\\e95b";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-pptx-light .path10:before {
    content: "\\e95c";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-pptx-light .path11:before {
    content: "\\e95d";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-pptx-light .path12:before {
    content: "\\e95e";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-pptx-light .path13:before {
    content: "\\e95f";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-rar .path1:before {
    content: "\\e960";
    color: rgb(59, 65, 65);
  }
  .icon-rar .path2:before {
    content: "\\e961";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-rar .path3:before {
    content: "\\e962";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-rar .path4:before {
    content: "\\e963";
    margin-left: -0.7509765625em;
    color: rgb(254, 254, 254);
  }
  .icon-rar .path5:before {
    content: "\\e964";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-rar .path6:before {
    content: "\\e965";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-rar .path7:before {
    content: "\\e966";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-rar .path8:before {
    content: "\\e967";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-rar .path9:before {
    content: "\\e968";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-rar .path10:before {
    content: "\\e969";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-rar .path11:before {
    content: "\\e96a";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-rar .path12:before {
    content: "\\e96b";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-rar-light .path1:before {
    content: "\\e96c";
    color: rgb(210, 210, 210);
  }
  .icon-rar-light .path2:before {
    content: "\\e96d";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-rar-light .path3:before {
    content: "\\e96e";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-rar-light .path4:before {
    content: "\\e96f";
    margin-left: -0.7509765625em;
    color: rgb(254, 254, 254);
  }
  .icon-rar-light .path5:before {
    content: "\\e970";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-rar-light .path6:before {
    content: "\\e971";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-rar-light .path7:before {
    content: "\\e972";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-rar-light .path8:before {
    content: "\\e973";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-rar-light .path9:before {
    content: "\\e974";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-rar-light .path10:before {
    content: "\\e975";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-rar-light .path11:before {
    content: "\\e976";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-rar-light .path12:before {
    content: "\\e977";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-xlsx .path1:before {
    content: "\\e978";
    color: rgb(59, 65, 65);
  }
  .icon-xlsx .path2:before {
    content: "\\e979";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-xlsx .path3:before {
    content: "\\e97a";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-xlsx .path4:before {
    content: "\\e97b";
    margin-left: -0.7509765625em;
    color: rgb(254, 254, 254);
  }
  .icon-xlsx .path5:before {
    content: "\\e97c";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-xlsx .path6:before {
    content: "\\e97d";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-xlsx .path7:before {
    content: "\\e97e";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-xlsx .path8:before {
    content: "\\e97f";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-xlsx-light .path1:before {
    content: "\\e980";
    color: rgb(210, 210, 210);
  }
  .icon-xlsx-light .path2:before {
    content: "\\e981";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-xlsx-light .path3:before {
    content: "\\e982";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-xlsx-light .path4:before {
    content: "\\e983";
    margin-left: -0.7509765625em;
    color: rgb(254, 254, 254);
  }
  .icon-xlsx-light .path5:before {
    content: "\\e984";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-xlsx-light .path6:before {
    content: "\\e985";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-xlsx-light .path7:before {
    content: "\\e986";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-xlsx-light .path8:before {
    content: "\\e987";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-zip .path1:before {
    content: "\\e988";
    color: rgb(59, 65, 65);
  }
  .icon-zip .path2:before {
    content: "\\e989";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-zip .path3:before {
    content: "\\e98a";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-zip .path4:before {
    content: "\\e98b";
    margin-left: -0.7509765625em;
    color: rgb(254, 254, 254);
  }
  .icon-zip .path5:before {
    content: "\\e98c";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-zip .path6:before {
    content: "\\e98d";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-zip .path7:before {
    content: "\\e98e";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-zip .path8:before {
    content: "\\e98f";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-zip .path9:before {
    content: "\\e990";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-zip .path10:before {
    content: "\\e991";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-zip .path11:before {
    content: "\\e992";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-zip .path12:before {
    content: "\\e993";
    margin-left: -0.7509765625em;
    color: rgb(59, 65, 65);
  }
  .icon-zip-light .path1:before {
    content: "\\e994";
    color: rgb(210, 210, 210);
  }
  .icon-zip-light .path2:before {
    content: "\\e995";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-zip-light .path3:before {
    content: "\\e996";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-zip-light .path4:before {
    content: "\\e997";
    margin-left: -0.7509765625em;
    color: rgb(254, 254, 254);
  }
  .icon-zip-light .path5:before {
    content: "\\e998";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-zip-light .path6:before {
    content: "\\e999";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-zip-light .path7:before {
    content: "\\e99a";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-zip-light .path8:before {
    content: "\\e99b";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-zip-light .path9:before {
    content: "\\e99c";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-zip-light .path10:before {
    content: "\\e99d";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-zip-light .path11:before {
    content: "\\e99e";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
  .icon-zip-light .path12:before {
    content: "\\e99f";
    margin-left: -0.7509765625em;
    color: rgb(210, 210, 210);
  }
`;

export default FontStyle;
