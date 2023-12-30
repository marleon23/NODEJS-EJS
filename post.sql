CREATE TABLE IF NOT EXISTS post_mock (
    user_uuid TEXT,
    user_name VARCHAR(50),
    contents TEXT,
    number_of_likes INT
);

CREATE TABLE IF NOT EXISTS users(
  user_uuid TEXT,
  user_name TEXT,
  hashed_password TEXT,
  email TEXT
);
INSERT INTO post_mock (user_name, contents, number_of_likes) VALUES ('gnisen0', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1);

INSERT INTO post_mock (user_name, contents, number_of_likes) VALUES ('gbernade1', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 2);

INSERT INTO post_mock (user_name, contents, number_of_likes) VALUES ('jstrute2', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 3);

INSERT INTO post_mock (user_name, contents, number_of_likes) VALUES ('bpirazzi3', 'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 4);

INSERT INTO post_mock (user_name, contents, number_of_likes) VALUES ('bbeamish4', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.', 5);

INSERT INTO post_mock (user_name, contents, number_of_likes) VALUES ('astarking5', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 6);

INSERT INTO post_mock (user_name, contents, number_of_likes) VALUES ('mgerrey6', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 7);

INSERT INTO post_mock (user_name, contents, number_of_likes) VALUES ('abrowse7', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 8);

INSERT INTO post_mock (user_name, contents, number_of_likes) VALUES ('jhinks8', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 9);

INSERT INTO post_mock (user_name, contents, number_of_likes) VALUES ('clohden9', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 10);

INSERT INTO post_mock (user_name, contents, number_of_likes) VALUES ('gsaladina', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 11);

INSERT INTO post_mock (user_name, contents, number_of_likes) VALUES ('pwanderschekb', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 12);

INSERT INTO post_mock (user_name, contents, number_of_likes) VALUES ('oraperc', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 13);

INSERT INTO post_mock (user_name, contents, number_of_likes) VALUES ('dcullabined', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rh',4);
