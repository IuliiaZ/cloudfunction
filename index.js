exports.helloWorld = (req, resp) => {
  const message =
<<<<<<< HEAD
    "<font color='blue'>Cloud function</font><br><b>App Version 1.0</b>";
  resp.status(200).send(message);
=======
    "<font color='blue'>Cloud function</font><br><b>App Version 1.1</b>";
  res.status(200).send(message);
>>>>>>> 3872bc3fa564358aaedb9e350d15f05c6c1158e6
};
