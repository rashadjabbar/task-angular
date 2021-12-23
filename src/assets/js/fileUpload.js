let fileName;

function uploadDoc() {
    // if (this.fileToUpload.files.length != 0 ) {             
    var fileInput = document.getElementById('inputFile');
    if (fileInput.files.length != 0) {
        var formdata = new FormData();
        formdata.append(fileInput.files[0].name, fileInput.files[0]);

        $.ajax({
            url: 'https://localhost:44388/api/orders/upload',
            type: "POST",
            contentType: false,
            processData: false,
            data: formdata,
            success: function (res) {
                
            },
            error: function (err) {
                alert(err.statusText);
            }
        });
    }
}  

function myFunction() {
    document.getElementById("choseFile").style.zIndex = "-1000";

  }

