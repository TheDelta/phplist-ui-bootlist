module.exports = function (grunt) {
  require("jit-grunt")(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat: {
      options: {
        separator: ";",
      },
      dist: {
        src: [
          "js/jquery.toggleText.js",
          "js/bootstrap-select.js",
          "js/phpList3ToBootstrap.js",
          "bootstrap/dist/js/bootstrap.min.js",
          "js/bootstrap-tagsinput.js",
          "js/bootstrap-dialog.js",
          "js/bootstrap-toggle.js",
          "js/phplist.js",
        ],
        dest: "js/dist/<%= pkg.name %>.js",
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
      },
      dist: {
        files: {
          "js/dist/<%= pkg.name %>.min.js": ["<%= concat.dist.dest %>"],
        },
      },
    },
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2,
        },
        files: {
          "css/style.css": "less/style.less", // destination file and source file
        },
      },
    },
    watch: {
      styles: {
        files: ["less/**/*.less"], // which files to watch
        tasks: ["less", "newer:copy"],
        options: {
          nospawn: true,
        },
      },
    },
  });
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.registerTask("mydefault", ["less", "watch", "concat", "uglify"]);
  setupUGX(grunt);
};

function setupUGX(grunt) {
  grunt.config.set("clean", {
    build: {
      files: [{ src: "build/" }],
    },
  });
  grunt.config.set("copy", {
    build: {
      files: [
        {
          expand: true,
          dot: true,
          src: [
            "**/*",
            "!.git/**",
            "!.*",
            "!package.json",
            "!package-lock.json",
            "!composer.json",
            "!gruntfile.js",
            "!node_modules/**",
            "!less/**",
            "!bootstrap/**",
            "!.vscode/**",
            "!js/*.js",
            "js/jquery.min.js",
            "!js/dist/phpList_ui_bootlist.js",
          ],
          dest: "build/",
        },
      ],
    },
  });
  grunt.config.set("replace", {
    paths: {
      src: ["build/**/*.{css,js,php,inc}"],
      overwrite: true,
      replacements: [
        {
          from: "ui/phplist-ui-bootlist/",
          to: "ui/ugxmods/",
        },
      ],
    },
    info: {
      src: ["build/theme_info"],
      overwrite: true,
      replacements: [
        {
          from: "name=Trevelin",
          to: "name=UGXMODS",
        },
        {
          from: "dir=phplist-ui-bootlist",
          to: "dir=ugxmods",
        },
      ],
    },
  });
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-text-replace");
  grunt.loadNpmTasks("grunt-newer");

  grunt.registerTask("default", ["less", "concat", "uglify", "clean", "copy", "replace"]);
}
