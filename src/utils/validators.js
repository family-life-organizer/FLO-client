const isEmpty = value =>
	value === undefined ||
	value === null ||
	(typeof value === 'object' && Object.keys(value).length === 0) ||
	(typeof value === 'string' && value.trim().length === 0);

export const checkLoginInputs = values => {
	let errors = {};
	const { email, userName, password, isUserName } = values;
	if (isUserName) {
		if (isEmpty(userName)) {
			errors.userName = '*Required';
		} else if (isEmpty(email)) {
			errors.email = '*Required';
		}
	}
	if (isEmpty(password)) {
		errors.password = '*Required';
	}
	return {
		errors,
		isValid : isEmpty(errors),
	};
};

export const checkRegisterInputs = values => {
	let errors = {};
	const { firstName, lastName, email, userName, password, password2 } = values;
	if (isEmpty(firstName)) {
		errors.firstName = '*Required';
	}
	if (isEmpty(lastName)) {
		errors.lastName = '*Required';
	}
	if (isEmpty(userName)) {
		errors.userName = '*Required';
	}
	if (
		!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			String(email).toLowerCase(),
		)
	) {
		errors.email = '*Invalid Email Address';
	}
	if (isEmpty(email)) {
		errors.email = '*Required';
	}
	if (password !== password2) {
		errors.password2 = 'Passwords must match';
	}

	return {
		errors,
		isValid : isEmpty(errors),
	};
};
