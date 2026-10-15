exports.helloworld = (req, resp) => {
  const message =
    "<font color='blue'>Cloud function</font><br><b>App Version 1.0</b>";
  res.status(200).send(message);
};
