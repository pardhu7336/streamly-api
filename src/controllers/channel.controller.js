
import { Channel } from "../models/channel.model.js";

export async function createChannel(req, res, next) {
  try {
    const channel = await Channel.create(req.body);
    res.status(201).json(channel);
  } catch (err) {
    next(err);
  }
}

export async function getChannel(req, res, next) {
  try {
    const channel = await Channel.findById(req.params.id);

    if (!channel) {
      return res.status(404).json({ error: "Channel not found" });
    }

    res.json(channel);
  } catch (err) {
    next(err);
  }
}

export async function updateChannel(req, res, next) {
  try {
    const channel = await Channel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!channel) {
      return res.status(404).json({ error: "Channel not found" });
    }

    res.json(channel);
  } catch (err) {
    next(err);
  }
}

export async function deleteChannel(req, res, next) {
  try {
    const channel = await Channel.findByIdAndDelete(req.params.id);

    if (!channel) {
      return res.status(404).json({ error: "Channel not found" });
    }

    res.status(204).send();
  } catch (err) {
    next(err);
  }
}
