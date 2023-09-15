import Job from "../models/jobModel.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/customErrors.js";

export const getAllJobs = async (req, res) => {
  const job = await Job.find({ createdBy: req.user.userId });
  res.status(200).json({
    jobs: job,
  });
};

export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.OK).json({
    status: "success",
    data: job,
  });
};

export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);

  res.status(StatusCodes.CREATED).json({
    status: "success",
    data: job,
  });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  const { company, position, jobStatus, jobType, jobLocation } = req.body;
  const job = await Job.findByIdAndUpdate(
    id,
    {
      company: company,
      position: position,
      jobStatus: jobStatus,
      jobType: jobType,
      jobLocation: jobLocation,
    },
    { new: true }
  );

  res.status(StatusCodes.OK).json({
    status: "success",
    data: job,
  });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findByIdAndDelete(id);

  if (!job) throw new NotFoundError(`${id} not Found!`);
  res.status(StatusCodes.OK).json({
    status: "success",
    msg: "deleted",
  });
};
