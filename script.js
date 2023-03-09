function validation() {
  const source = document.getElementById("source").value;
  const pipeline = document.getElementById("pipeline").value;
  const project = document.getElementById("project").value;
  const bucket = document.getElementById("bucket").value;
  const file = document.getElementById("file").value;
  const credential = document.getElementById("credential").value;
  
  const error_message = document.getElementById("error_message");
  error_message.style.padding = "10px";

  const regex = /^[a-zA-Z0-9]*$/;

  if (source.length < 5 || !regex.test(source) || source.startsWith('-') || source.startsWith('_') || source.startsWith('+')) {
    error_message.innerHTML = "Invalid! Please enter a valid source value (minimum length 5, no special characters, cannot start with '-', '_', '+')";
    return false;
  }

  if (pipeline.length < 5 || !regex.test(pipeline) || pipeline.startsWith('-') || pipeline.startsWith('_') || pipeline.startsWith('+')) {
    error_message.innerHTML = "Invalid! Please enter a valid pipeline value (minimum length 5, no special characters, cannot start with '-', '_', '+')";
    return false;
  }

  if (project.length < 5 || !regex.test(project) || project.startsWith('-') || project.startsWith('_') || project.startsWith('+')) {
    error_message.innerHTML = "Invalid! Please enter a valid project value (minimum length 5, no special characters, cannot start with '-', '_', '+')";
    return false;
  }

  if (bucket.length < 5 || !regex.test(bucket) || bucket.startsWith('-') || bucket.startsWith('_') || bucket.startsWith('+')) {
    error_message.innerHTML = "Invalid! Please enter a valid bucket value (minimum length 5, no special characters, cannot start with '-', '_', '+')";
    return false;
  }

  if (file.length < 5 || !regex.test(file) || file.startsWith('-') || file.startsWith('_') || file.startsWith('+')) {
    error_message.innerHTML = "Invalid! Please enter a valid file value (minimum length 5, no special characters, cannot start with '-', '_', '+')";
    return false;
  }

  if (credential.length < 5 || !regex.test(credential) || credential.startsWith('-') || credential.startsWith('_') || credential.startsWith('+')) {
    error_message.innerHTML = "Invalid! Please enter a valid credential value (minimum length 5, no special characters, cannot start with '-', '_', '+')";
    return false;
  }

  return true;
}
