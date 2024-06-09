import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import PageWrapper from '../../../../components/layouts/PageWrapper/PageWrapper';
import Container from '../../../../components/layouts/Container/Container';
import usersDb, { TUser } from '../../../../mocks/db/employees.db';
import Card, {
	CardBody,
	CardFooter,
	CardFooterChild,
	CardHeader,
	CardHeaderChild,
	CardTitle,
} from '../../../../components/ui/Card';
import Subheader, {
	SubheaderLeft,
	SubheaderRight,
	SubheaderSeparator,
} from '../../../../components/layouts/Subheader/Subheader';
import Avatar from '../../../../components/Avatar';
import { appPages } from '../../../../config/pages.config';
import Button from '../../../../components/ui/Button';
import Label from '../../../../components/form/Label';
import Input from '../../../../components/form/Input';
import rolesDb from '../../../../mocks/db/roles.db';
import Select from '../../../../components/form/Select';
import FieldWrap from '../../../../components/form/FieldWrap';
import Icon from '../../../../components/icon/Icon';
import Checkbox from '../../../../components/form/Checkbox';
import Badge from '../../../../components/ui/Badge';
import useSaveBtn from '../../../../hooks/useSaveBtn';
import CertPreviewTablePartial from '../../../../components/tables/CertPreviewTable.partial';

const CustomerPage = () => {
	const { i18n } = useTranslation();

	const { id } = useParams();
	const isNewItem = id === 'new';
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [isSaving, setIsSaving] = useState<boolean>(false);

	const userDb: TUser | undefined = usersDb.find((i) => i.id === id);

	const formik = useFormik({
		initialValues: {
			username: userDb?.username,
			email: userDb?.email,
			firstName: userDb?.firstName,
			lastName: userDb?.lastName,
			position: userDb?.position,
			role: userDb?.role,
			oldPassword: '',
			newPassword: '',
			newPasswordConfirmation: '',
			twitter: userDb?.socialProfiles?.twitter,
			facebook: userDb?.socialProfiles?.facebook,
			instagram: userDb?.socialProfiles?.instagram,
			github: userDb?.socialProfiles?.github,
			twoFactorAuth: userDb?.twoFactorAuth,
			weeklyNewsletter: userDb?.newsletter?.weeklyNewsletter || false,
			lifecycleEmails: userDb?.newsletter?.lifecycleEmails || false,
			promotionalEmails: userDb?.newsletter?.promotionalEmails || false,
			productUpdates: userDb?.newsletter?.productUpdates || false,
		},
		onSubmit: () => {},
	});

	const [passwordShowStatus, setPasswordShowStatus] = useState<boolean>(false);
	const [passwordNewShowStatus, setPasswordNewShowStatus] = useState<boolean>(false);
	const [passwordNewConfShowStatus, setPasswordNewConfShowStatus] = useState<boolean>(false);

	const { saveBtnText, saveBtnColor, saveBtnDisable } = useSaveBtn({
		isNewItem,
		isSaving,
		isDirty: formik.dirty,
	});

	return (
		<PageWrapper name={isNewItem ? 'New Customer' : formik.values.firstName}>
			<Subheader>
				<SubheaderLeft>
					<Link
						to={`../${appPages.managementPages.subPages.employeePage.subPages.listPage.to}`}>
						<Button icon='HeroArrowLeft' className='!px-0'>
							Back to List
						</Button>
					</Link>
					<SubheaderSeparator />
					{isNewItem ? (
						'Add New User'
					) : (
						<>
							{/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
							{`${userDb?.firstName} ${userDb?.lastName}`}{' '}
							<Badge
								color='blue'
								variant='outline'
								rounded='rounded-full'
								className='border-transparent'>
								Edit Employee
							</Badge>
						</>
					)}
				</SubheaderLeft>
				<SubheaderRight>
					<Button
						icon='HeroServer'
						variant='solid'
						color={saveBtnColor}
						isDisable={saveBtnDisable}
						onClick={() => formik.handleSubmit()}>
						{saveBtnText}
					</Button>
				</SubheaderRight>
			</Subheader>
			<Container className='flex shrink-0 grow basis-auto flex-col pb-0'>
				<div className='flex h-full flex-wrap content-start'>
					<div className='mb-4 grid w-full grid-cols-12 gap-4'>
						<div className='col-span-12 flex flex-col gap-4 xl:col-span-6'>
							<Card>
								<CardBody>
									<div className='flex w-full gap-4'>
										<div className='flex-shrink-0'>
											<Avatar
												src={userDb?.image?.thumb}
												className='!w-24'
												// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
												name={`${userDb?.firstName} ${userDb?.lastName}`}
											/>
										</div>
										<div className='flex grow items-center'>
											<div>
												<div className='w-full text-2xl font-semibold'>
													{userDb?.firstName} {userDb?.lastName}
												</div>

												<div className='w-full text-zinc-500'>
													{userDb?.email}
												</div>
											</div>
										</div>
									</div>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<div>
												<div>Employee Information</div>
												<div className='text-lg font-normal text-zinc-500'>
													Here you can update employee information
												</div>
											</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='grid grid-cols-12 gap-4'>
										<div className='col-span-12 lg:col-span-6'>
											<Label htmlFor='username'>Username</Label>
											<Input
												id='username'
												name='username'
												onChange={formik.handleChange}
												value={formik.values.username}
												autoComplete='username'
											/>
										</div>
										<div className='col-span-12 lg:col-span-6'>
											<Label htmlFor='email'>Email</Label>
											<Input
												id='email'
												name='email'
												onChange={formik.handleChange}
												value={formik.values.email}
												autoComplete='email'
											/>
										</div>
										<div className='col-span-12 lg:col-span-6'>
											<Label htmlFor='firstName'>First Name</Label>
											<Input
												id='firstName'
												name='firstName'
												onChange={formik.handleChange}
												value={formik.values.firstName}
												autoComplete='given-name'
												autoCapitalize='words'
											/>
										</div>
										<div className='col-span-12 lg:col-span-6'>
											<Label htmlFor='lastName'>Last Name</Label>
											<Input
												id='lastName'
												name='lastName'
												onChange={formik.handleChange}
												value={formik.values.lastName}
												autoComplete='family-name'
												autoCapitalize='words'
											/>
										</div>

										<div className='col-span-12'>
											<Label htmlFor='position'>Role</Label>
											<Select
												name='role'
												onChange={formik.handleChange}
												value={formik.values.role}
												placeholder='Select role'>
												{rolesDb.map((role) => (
													<option key={role.id} value={role.id}>
														{role.name}
													</option>
												))}
											</Select>
										</div>
										<div className='col-span-12'>
											<Label htmlFor='position'>Position</Label>
											<Input
												id='position'
												name='position'
												onChange={formik.handleChange}
												value={formik.values.position}
											/>
										</div>
									</div>
								</CardBody>
							</Card>
						</div>
						<div className='col-span-12 flex flex-col gap-4 xl:col-span-6'>
							<Card className='h-full'>
								<CertPreviewTablePartial />
							</Card>
						</div>
					</div>
				</div>
				<div className='flex'>
					<div className='grid w-full grid-cols-12 gap-4'>
						<div className='col-span-12'>
							<Card>
								<CardFooter>
									<CardFooterChild>
										{isNewItem && (
											<div className='flex items-center gap-2 text-amber-500'>
												<Icon
													icon='HeroExclamationTriangle'
													size='text-2xl'
												/>
												<span>Not saved yet</span>
											</div>
										)}
										{!isNewItem && (
											<div className='flex items-center gap-2'>
												<Icon icon='HeroDocumentCheck' size='text-2xl' />
												<span className='text-zinc-500'>Last saved:</span>
												<b>{dayjs().locale(i18n.language).format('LLL')}</b>
											</div>
										)}
									</CardFooterChild>
									<CardFooterChild>
										<Button
											icon='HeroServer'
											variant='solid'
											color={saveBtnColor}
											isDisable={saveBtnDisable}
											onClick={() => formik.handleSubmit()}>
											{saveBtnText}
										</Button>
									</CardFooterChild>
								</CardFooter>
							</Card>
						</div>
					</div>
				</div>
			</Container>
		</PageWrapper>
	);
};

export default CustomerPage;
